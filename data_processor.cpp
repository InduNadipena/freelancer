#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers = {10, 20, 30, 40, 50};
    int total = 0;

    for (int value : numbers) {
        total += value;
    }

    cout << "Total: " << total << endl;
    return 0;
}
