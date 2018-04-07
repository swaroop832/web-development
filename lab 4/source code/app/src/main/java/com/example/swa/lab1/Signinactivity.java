package com.example.swa.lab1;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

public class Signinactivity extends AppCompatActivity {
    EditText email1,password1;
    Button signin,ForgotPassword,fb_login, Register ;
    CallbackManager callbackManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FacebookSdk.sdkInitialize(getApplicationContext());

        setContentView(R.layout.sign_in);
        email1 = (EditText)findViewById(R.id.email_signin);
        password1= (EditText)findViewById(R.id.password_signin);
        signin=(Button)findViewById(R.id.sing_in_button);
        ForgotPassword = (Button)findViewById(R.id.button2);
        fb_login =(LoginButton)findViewById(R.id.facebook_lg_bt);
        Register =(Button)findViewById(R.id.button5);
        callbackManager = CallbackManager.Factory.create();

        LoginManager.getInstance().registerCallback(callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {
                Toast.makeText(Signinactivity.this, "sucessfully logedin ",
                        Toast.LENGTH_LONG).show();
                Intent i1 = new Intent(Signinactivity.this,Indexpage.class);
                startActivity(i1);
            }

            @Override
            public void onCancel() {
                Toast.makeText(Signinactivity.this, "Facebook login Canceled ",
                        Toast.LENGTH_LONG).show();
            }

            @Override
            public void onError(FacebookException error) {
                Toast.makeText(Signinactivity.this, "Error Occured please try again ",
                        Toast.LENGTH_LONG).show();
            }

        });

        final String Admin_Email="abc@gmail.com";
        final String Admin_password= "1234";

        signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if ( email1.getText()==null||password1.getText()==null)
                {
                    Toast.makeText(Signinactivity.this, "check email / password ",
                            Toast.LENGTH_LONG).show();

                }
                else if ( email1.getText().toString().equals(Admin_Email)&&password1.getText().toString().equals(Admin_password )) {

                    Toast.makeText(Signinactivity.this, "sucessfully logedin ",
                            Toast.LENGTH_LONG).show();

                    Intent i1 = new Intent(Signinactivity.this,Indexpage.class);
                    startActivity(i1);
                    }
                else {
                    Toast.makeText(Signinactivity.this, "Please Register before signing in ",
                            Toast.LENGTH_LONG).show();
                }
            }
        });
            ForgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
             Intent i2 = new Intent(Signinactivity.this,Registeractivity.class);
             startActivity(i2);
            }
            });
        Register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i2 = new Intent(Signinactivity.this,Registeractivity.class);
                startActivity(i2);
            }
        });

    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        super.onActivityResult(requestCode, resultCode, data);
        callbackManager.onActivityResult(requestCode, resultCode, data);
    }
}


