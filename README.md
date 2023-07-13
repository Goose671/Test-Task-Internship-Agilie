# Test-Task-Internship-Agilie

Test task for Full stack JS internship


Task 1.  Two friends are playing a game, they both give a number. 
The first one has to convert one number to another by multiplying this number by 2 (10 * 2 = 20) or adding one to the right (10 + 1 = 101). 

Your task is to write a program that will find whether it is possible to convert one number to another using only the above operations.



Task 2.   Array "arr" of length n+1 contains positive integers from 1 to n. 
Find any element that is repeated in the array in optimal time (O(n)) without changing the original array and without using additional memory.

Task 3.
3.1  
In powerlifting competitions, disc loaders weighing 0.5, 1, 2.5, 5, 10, 15, 20 and 25 kg are used. 
We also have American disc loaders whose weight is specified in lbs. Such disc loaders are available only in 10, 25, 35, 45 lbs. 
The weight on the bar is always the same and equals 20kg. 

You need to find such a combination of disc loaders so that the weight on the bar is minimal but exceeds the maximum record. For example, Athlete number 1 lifted 101kg using a 20kg bar, 4 20kg discs and two 0.5 discs. 
In order to surpass the weight of the previous athlete, Athlete number 2 will optimally lift 101.44 which can be obtained from a 20 kg barbell and two disc loaders of the following names: 1, 2.5, 10, kg and 25, 35 lbs.

Write a programme that, given a weight, will find the minimum subsequent weight.

! It is important that disc loaders of any weight are hung on the bar in pairs. Also, there can be no more than 24 disc loaders on the bar, i.e. a maximum of 12 on each side.

3.2
A manager has ordered a number of T-shirts in different sizes for a competition. A total of six sizes of T-shirts are printed: S, M, L, XL, XXL, XXXL. The number of T-shirts for each size is known.

During the registration, the organisers asked each of the n participants to indicate the size of the T-shirt.
A participant could choose 2 sizes, for example, M and L, which means that any of these T-shirts can fit him or her. If a participant chooses 2 sizes, they must be adjacent. They cannot be S and XXL.

Write a programme to determine if it is possible to give all the athletes a gift from the T-shirts we have. Each participant should receive a T-shirt of his or her size:
the required size if one size is specified;
any of the two sizes if two adjacent sizes are specified.
If possible, the program should output any of the possible solutions.

Task 4. 
The theatre has a rectangular stage of size n* m. 
To arrange the actors on the stage, the theatre director has given you a plan showing where the actors should stand and where they should not.
There is a spotlight on the stage that can shine in one of four directions: left, up, right, or down when viewed from above. Thus, the position of the spotlight is determined by the cell in which it is placed and the direction in which it shines.


You need to choose a "good position" to place the spotlight on the stage that satisfies two conditions: there must be no actor in the selected cell, and there must be at least one actor in the direction the spotlight is shining.
You need to determine the number of possible "good positions" where the spotlight can be placed on the stage. Two positions are considered different if they differ in the cell where the spotlight is placed or the direction in which it shines.


Implementation of tasks 1-4: all input data should be passed through one json file. And the answer should be written to another json file.

