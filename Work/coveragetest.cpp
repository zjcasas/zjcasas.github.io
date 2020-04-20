#include <iostream>

using namespace std;

int main()
{
CodingStyles(10, 0)
}

void CoverageTest::CodingStyles(int a, int b)
{
    // Expected to hit FALSE
    if(b > a) return;

    // Expected to hit FALSE
    if(b > a)
        return;

    // Expected to hit FALSE
    if(b > a) { return; }

    // Expected to hit FALSE
    if(b > a) {
        return; }

    // Expected to hit FALSE
    if(b > a) {
        return;
    }

    // Expected to hit FALSE
    if(b > a)
    {
        return;
    }

    // Expected to hit FALSE
    if(      b>a)
    {
        return;
    }

    // Expected to hit TRUE
    if(b < a) b = b - 1;
    else return;

    // Expected to hit TRUE
    if(b < a)
        b = b - 1;
    else
        return;

    // Expected to hit TRUE
    if(b < a) { b = b - 1; }
    else { return; }

    // Expected to hit TRUE
    if(b < a) {
        b = b - 1; }
    else {
        return; }

    // Expected to hit TRUE
    if(b < a) {
        b = b - 1;
    }
    else {
        return;
    }

    // Expected to hit TRUE
    if(b < a)
    {
        b = a - 1;
    }
    else
    {
        return;
    }

    // Expected to hit TRUE
    if(b < a) b = b - 1; else return;

    // Expected to hit TRUE
    if(b < a) {b = b - 1;} else {return;}

    STATEMENTS;
}