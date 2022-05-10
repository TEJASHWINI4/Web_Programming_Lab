import java.io.*;
import java.util.*;
public class Main {
    static int x=0;
	static int y=0;
	static int a=0;
	static int b=0;
	static int prime=0;
	public static void main(String[] args) throws Exception
	{  
		Scanner s = new Scanner(System.in);  
		int n=s.nextInt();
		for(int c=0;c<n;c++)
		{
			prime=0;
			a=0;
			b=0;
			x = s.nextInt();  
			y = s.nextInt();  
			for (int i = x; i <= y; i++) 
			{  
				if (isPrime(i)) 
				{  
					prime+=1;
					if(a==0)
						a=i;
					else
						b=i; 
				}  
			} 
			
			display();
		}
	}  
	public static boolean isPrime(int n) 
	{  
		if (n <= 1) 
		{  
			return false;  
		}  
		for (int i = 2; i <= Math.sqrt(n); i++) 
		{  
			if (n % i == 0) 
			{  
				return false;  
			}  
		}  
		return true;  
	} 
	public static void display()
	{
        if(prime==0)
			System.out.println("-1");
		else if(x==y || prime==1)
			System.out.println("0");
		else
		{
			
			System.out.println(Math.abs(a-b));
		}
	}
}