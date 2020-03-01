//Hack It Together Hackathon
//IHS CSV 

#include <iostream>
#include <fstream>
#include <vector>
#include <iterator>
#include <string>
#include <algorithm>
#include <boost/algorithm/string.hpp>
using namespace std;

class CSVreader
{
    string fileName;
    string delimeter;
public:
    CSVreader(string filename, string delm = ","):
        fileName(filename), delimeter(delm)

        { }
    vector<vector<string>> getData();

};

vector<vector<string>> CSVreader::getData()
{
    ifstream file(fileName);

    vector<vector<string>> dataList;

    string line = "";

    while (getline(file, line))
    {
        vector<string> vec;
        boost::algorithm::split (vec, line, boost::is_any_of(delimeter));
        dataList.push_back(vec);
    }

    file.close();
    
    return dataList;
}
int main()
{
    string response;
    CSVreader reader("IHS_Data.csv");

    vector<vector<string>> dataList = reader.getData();

    cout << "What are you looking for?";
    cin >> response;

    for(vector<string> vec : dataList)
    {      
        for(string data : vec)
        {
            if (data == response)
            for (string data : vec)
                cout << data << endl;
        }
        //cout << endl;
    }

    return 0;
}




