package com.example.swa.lab1;

import android.content.Intent;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class Registeractivity extends AppCompatActivity{


    private EditText name,email,password;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.register_activity);
         name=(EditText)findViewById(R.id.name);
         email = (EditText)findViewById(R.id.email);
         password = (EditText)findViewById(R.id.password);
        Button register_button = (Button)findViewById(R.id.register_button);



        register_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if ( name.getText().toString().isEmpty()|| email.getText().toString().isEmpty()||password.getText().toString().isEmpty())
                {
                    Toast.makeText(Registeractivity.this, "check name / email / password ",
                            Toast.LENGTH_LONG).show();

                }
                else {
                    Intent i2 = new Intent(Registeractivity.this,Signinactivity.class);
                    Toast.makeText(Registeractivity.this, "Enter Details to login ",
                            Toast.LENGTH_LONG).show();
                    startActivity(i2);
                }
            }
        });


    }
}
