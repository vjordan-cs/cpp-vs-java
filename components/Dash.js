const cppMain = `// free-floating function
int main( int argc, char* argv[])
{
    printf( "Hello, world" );
}`;
const javaMain = `// every function must be part of a class; the main function for a particular
// class file is invoked when java <class> is run (so you can have one
// main function per class--useful for writing unit tests for a class)
class HelloWorld
{
    public static void main(String args[])
    {
        System.out.println( "Hello, World" );
    }
}`;
const cppComp = `// compile as
g++ foo.cc -o outfile
// run with
./outfile`;
const javaComp = `// compile classes in foo.java to <classname>.class
javac foo.java 

// run by invoking static main method in <classname>
java <classname>`;
const cppClassDec = `class Bar {};`;
const javaClassDec = `class Bar {}`;
const staticMem = `class Foo 
{
    static private int x;
    // static initialization block
    { x = 5; }
}`;

const cppScope = `class MyClass
{
    public:
    static doStuff();
};

// now it's used like this
MyClass::doStuff();`;

const javaScope = `class MyClass
{
    public static doStuff()
    {
        // do stuff
    }
}

// now it's used like this
MyClass.doStuff();`;
const cppObj = `// on the stack
myClass x;

// or on the heap
myClass *x = new myClass;`;
const javaObj = `// always allocated on the heap (also, always need parens for constructor)
myClass x = new myClass();`;

const cppAccess = `// If you're using a stack-based object, you access its fields with a dot:
myClass x;
x.my_field; // ok

// But you use the arrow operator (->) to access fields of a class when working with a pointer:
myClass x = new MyClass;
x->my_field; // ok`;
const javaAccess = `myClass x = new MyClass();
x.my_field; // ok`;
const cppRef = `// references are immutable, use pointers for more flexibility
int bar = 7, qux = 6;
int& foo = bar;`;
const javaRef = `// references are mutable and store addresses only to objects; there are
// no raw pointers
myClass x;
x.foo(); // error, x is a null "pointer"

// note that you always use . to access a field`;
const cppInher = `class Foo : public Bar
{ ... };`;
const javaInher = `class Foo extends Bar
{ ... }`;
const cppProtect = `public:
void foo();
void bar();`;
const javaProtect = `public void foo();
public void bar();`;
const cppVirtual = `virtual int foo(); // or, non-virtually as simply int foo();`;
const javaVirtual = `// functions are virtual by default; use final to prevent overriding
int foo(); // or, final int foo();`;
const cppAbstract = `// just need to include a pure virtual function
class Bar { public: virtual void foo() = 0; };`;
const javaAbstract = `// syntax allows you to be explicit!
abstract class Bar { public abstract void foo(); }

// or you might even want to specify an interface
interface Bar { public void foo(); }

// and later, have a class implement the interface:
class Chocolate implements Bar
{
    public void foo() { /* do something */ }
}`;

const cppNull = `// initialize pointer to NULL
int *x = NULL;`;

const javaNull = `// the compiler will catch the use of uninitialized references, but if you
// need to initialize a reference so it's known to be invalid, assign null
myClass x = null;`;

const cppBool = `bool foo;`;

const javaBool = `boolean foo;`;

const cppConst = `const int x = 7;`;

const javaConst = `final int x = 7;`;

const cppThrow = `int foo() throw (IOException)`;

const javaThrow = `int foo() throws IOException`;

const cppArray = `int x[10];
// or 
int *x = new x[10];

// use x, then reclaim memory
delete[] x;`;

const javaArray = `int[] x = new int[10];
// use x, memory reclaimed by the garbage collector or returned to the
// system at the end of the program's lifetime`;

const cppCollec = `vector myVec;
for ( vector<int>::iterator itr = myVec.begin();
      itr != myVec.end();
      ++itr )
{
    cout << *itr;
}`;
const javaCollec = `ArrayList myArrayList = new ArrayList();
Iterator itr = myArrayList.iterator();
while ( itr.hasNext() )
{
    System.out.println( itr.next() );
}

// or, in Java 5
ArrayList myArrayList = new ArrayList();
for( Object o : myArrayList ) {
    System.out.println( o );
}`;

export default function Dash() {
  return (
    <div>
      <div className="min-h-full w-full">
        <div className="bg-gray-800 text-white py-6 pl-36 text-xl font-bold">
          C++ vs Java - Object Oriented Programming with Rick King
        </div>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight text-gray-900">Examples</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">{/* <List /> */}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
