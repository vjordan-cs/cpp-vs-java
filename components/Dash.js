import { CodeBlock } from "@atlaskit/code";

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
            <div className="px-4 py-6 sm:px-0">
              {/* <List /> */}# C++ to Java Web Page ```html
              <ul role="list" className="space-y-3">
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Main Function</div>
                  <div className="">C++</div>
                  <CodeBlock language="c++" text={cppMain} />
                  <div className="">Java</div>
                  <CodeBlock language="java" text={javaMain} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Compiling</div>
                  C++
                  <CodeBlock language="c++" text={cppComp} />
                  Java
                  <CodeBlock language="java" text={javaComp} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Comments</div>
                  <div>{"Same in both languages (// and /* */ both work)"}</div>
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Class Declarations</div>
                  <div>
                    Almost the same, but Java does not require a semicolon
                  </div>
                  C++
                  <CodeBlock language="c++" text={cppClassDec} />
                  Java
                  <CodeBlock language="java" text={javaClassDec} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Method Declarations</div>
                  <div>
                    Same, except that in Java, must always be part of a class,
                    and may prefix with public/private/protected
                  </div>
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    Constructors and destructors
                  </div>
                  <div>
                    {
                      "Constructor has same syntax in both (name of the class), Java has no exact equivalent of the destructor"
                    }
                  </div>
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    Static member functions and variables
                  </div>
                  <div>
                    {
                      "Same as method declarations, but Java provides static initialization blocks to initialize static variables (instead of putting a definition in a source code file):"
                    }
                  </div>
                  <CodeBlock language="Java" text={staticMem} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    Scoping static methods and namespaces
                  </div>
                  C++
                  <div>
                    If you have a class and wish to refer to a static method,
                    you use the form Class::method.
                  </div>
                  <CodeBlock language="c++" text={cppScope} />
                  Java
                  <div>
                    All scoping in Java uses the . again, just like accessing
                    fields of a class, so it's a bit more regular:
                  </div>
                  <CodeBlock language="java" text={javaScope} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Object declarations</div>
                  C++
                  <CodeBlock language="c++" text={cppObj} />
                  Java
                  <CodeBlock language="java" text={javaObj} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    Accessing fields of objects
                  </div>
                  C++
                  <div>
                    If you're using a stack-based object, you access its fields
                    with a dot:
                  </div>
                  <CodeBlock language="c++" text={cppAccess} />
                  Java
                  <div>
                    You always work with references (which are similar to
                    pointers--see the next section), so you always use a dot:
                  </div>
                  <CodeBlock language="java" text={javaAccess} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    References vs. pointers
                  </div>
                  C++
                  <CodeBlock language="c++" text={cppRef} />
                  Java
                  <CodeBlock language="java" text={javaRef} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Inheritance</div>
                  C++
                  <CodeBlock language="c++" text={cppInher} />
                  Java
                  <CodeBlock language="java" text={javaInher} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    {"Protection levels (abstraction barriers)"}
                  </div>
                  C++
                  <CodeBlock language="c++" text={cppProtect} />
                  Java
                  <CodeBlock language="java" text={javaProtect} />
                </li>

                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Virtual functions</div>
                  C++
                  <CodeBlock language="c++" text={cppVirtual} />
                  Java
                  <CodeBlock language="java" text={javaProtect} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Abstract classes</div>
                  C++
                  <CodeBlock language="c++" text={cppVirtual} />
                  Java
                  <CodeBlock language="java" text={javaVirtual} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Memory Management</div>
                  <div>
                    Roughly the same--new allocates, but no delete in Java since
                    it has garbage collection.
                  </div>
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">NULL vs. null</div>
                  C++
                  <CodeBlock language="c++" text={cppNull} />
                  Java
                  <CodeBlock language="java" text={javaNull} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Booleans</div>
                  <div>
                    Java is a bit more verbose: you must write boolean instead
                    of merely bool.
                  </div>
                  C++
                  <CodeBlock language="c++" text={cppBool} />
                  Java
                  <CodeBlock language="java" text={javaBool} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Const-ness </div>
                  C++
                  <CodeBlock language="c++" text={cppConst} />
                  Java
                  <CodeBlock language="java" text={javaConst} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Throw Spec</div>
                  <div>
                    First, Java enforce throw specs at compile time--you must
                    document if your method can throw an exception
                  </div>
                  C++
                  <CodeBlock language="c++" text={cppThrow} />
                  Java
                  <CodeBlock language="java" text={javaThrow} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">Arrays</div>
                  C++
                  <CodeBlock language="c++" text={cppArray} />
                  Java
                  <CodeBlock language="java" text={javaArray} />
                </li>
                <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="text-xl font-bold">
                    Collections and Iteration
                  </div>
                  C++
                  <div>
                    {
                      "Iterators are members of classes. The start of a range is <container>.begin(), and the end is <container>.end(). Advance using ++ operator, and access using *."
                    }
                  </div>
                  <CodeBlock language="c++" text={cppCollec} />
                  Java
                  <div>
                    {
                      "Iterator is just an interface. The start of the range is <collection>.iterator, and you check to see if you're at the end with itr.hasNext(). You get the next element using itr.next() (a combination of using ++ and * in C++)."
                    }
                  </div>
                  <CodeBlock language="java" text={javaCollec} />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
