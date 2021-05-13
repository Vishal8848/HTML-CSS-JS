// To develop a CUI input interface and produce output as a HTML file

#include <iostream>
#include <fstream>

using namespace std;

// HTML Boilerplate

string starttag  = "<!DOCTYPE html> <html> <head> <title>";
string mid1tag   = "</title> </head> <body style=\"background:powderblue\"> <h2 title=\"Just the Beginning\"> <i> " ;
string mid2tag   = "</i> </h2> <hr> <br/> <br/> <p1 title=\"CPP to HTML\"> ";
string filename  = "<br/> <br/> <hr> <i> Made from the file \"boilerplate.cpp\" . </i></p1> <br/>";
string endtag    = "</body></html>" ;

int main()
{
    string output;
    string title, heading, para1;

    // Building a basic HTML Document
    cout << endl << endl << "Enter Page Title   : ";  getline(cin, title);
    cout << endl << endl << "Enter Page Heading : ";  getline(cin, heading);
    cout << endl << endl << "Provide Paragraph  : ";  getline(cin, para1);
    output = starttag + title + mid1tag + heading + mid2tag + para1 + filename + endtag;

    // Making of the HTML file (.html)
    ofstream htmlptr;
    htmlptr.open("cpptohtm.html", ios::trunc);
    htmlptr << output;
    htmlptr.close();

    // Opening the HTML File in a web browser
    system("C:\\Users\\admin\\Desktop\\Vishal\\\"Web Files\"\\HTML\\cpptohtm.html");

    return 0;
}
