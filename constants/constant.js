import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

export const actions = [
  {
    title: "Main Function",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    code: {
      cpp: "// free-floating function\nint main( int argc, char* argv[])\n{\nprintf( 'Hello, world' );\n}",
      java: "// every function must be part of a class; the main function for a particular\n// class file is invoked when java <class> is run (so you can have one\n// main function per class--useful for writing unit tests for a class)\nclass HelloWorld\n{\npublic static void main(String args[])\n{\nSystem.out.println( 'Hello, World' );\n}\n}\n",
    },
  },
  {
    title: "Compiling",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    code: {
      cpp: "// compile as\ng++ foo.cc -o outfile\n// run with\n./outfile",
      java: "// compile classes in foo.java to <classname>.class\njavac foo.java\n// run by invoking static main method in <classname>\njava <classname>",
    },
  },
  {
    title: "Comments",
    href: "#",
    icon: CashIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    notes: "Same in both languages (// and /* */ both work)",
    code: {
      cpp: "",
      java: "",
    },
  },
  {
    title: "Class Declarations",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    notes: "Almost the same, but Java does not require a semicolon",
    code: {
      cpp: "class Bar {};",
      java: "class Bar {}",
    },
  },
  {
    title: "Method Declarations",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    notes:
      "Same, except that in Java, must always be part of a class, and may prefix with public/private/protected",
    code: {
      cpp: "",
      java: "",
    },
  },
  {
    title: "Constructors and destructors",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    notes:
      "Constructor has same syntax in both (name of the class), Java has no exact equivalent of the destructor",
    code: {
      cpp: "",
      java: "",
    },
  },
  {
    title: "Static member functions and variables",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    notes:
      "Same as method declarations, but Java provides static initialization blocks to initialize static variables (instead of putting a definition in a source code file):",
    code: {
      cpp: "",
      java: "class Foo\n{\nstatic private int x;\n// static initialization block\n{ x = 5; }\n}",
    },
  },
  {
    title: "Scoping static methods and namespaces",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    cnotes:
      "If you have a class and wish to refer to a static method, you use the form Class::method.",
    jnotes:
      "All scoping in Java uses the . again, just like accessing fields of a class, so it's a bit more regular:",
    code: {
      cpp: "class MyClass\n{\npublic:\nstatic doStuff();\n};\n\n// now it's used like this\nMyClass::doStuff();",
      java: "class MyClass\n{\npublic static doStuff()\n{\n// do stuff\n}\n}\n\n// now it's used like this\nMyClass.doStuff();",
    },
  },
  {
    title: "Object declarations",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "// on the stack\nmyClass x;\n\n// or on the heap\nmyClass *x = new myClass;",
      java: "// always allocated on the heap (also, always need parens for constructor)\nmyClass x = new myClass();",
    },
  },
  {
    title: "Accessing fields of objects",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    cnotes:
      "If you're using a stack-based object, you access its fields with a dot:",
    cnotes2:
      "But you use the arrow operator (->) to access fields of a class when working with a pointer:",

    jnotes:
      "You always work with references (which are similar to pointers--see the next section), so you always use a dot:",
    code: {
      cpp: "myClass x;\nx.my_field; // ok",
      cpp2: "myClass x = new MyClass;\nx->my_field; // ok",
      java: "myClass x = new MyClass();\nx.my_field; // ok",
    },
  },
  {
    title: "References vs. pointers",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "// references are immutable, use pointers for more flexibility\nint bar = 7, qux = 6;\nint& foo = bar;",
      java: "// references are mutable and store addresses only to objects; there are\n// no raw pointers\nmyClass x;x.foo(); // error, x is a null ``pointer''\n\n// note that you always use . to access a field",
    },
  },
  {
    title: "Inheritance",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "class Foo : public Bar\n{ ... };",
      java: "class Foo extends Bar\n{ ... }",
    },
  },
  {
    title: "Protection levels (abstraction barriers)",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "public:\nvoid foo();\nvoid bar();",
      java: "public void foo();\npublic void bar();",
    },
  },
  {
    title: "Virtual functions",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "virtual int foo(); // or, non-virtually as simply int foo();",
      java: "// functions are virtual by default; use final to prevent overriding\nint foo(); // or, final int foo();",
    },
  },
  {
    title: "Abstract classes",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "// just need to include a pure virtual function\nclass Bar { public: virtual void foo() = 0; };",
      java: "// syntax allows you to be explicit!\nabstract class Bar { public abstract void foo(); }\n\n// or you might even want to specify an interface\ninterface Bar { public void foo(); }\n\n// and later, have a class implement the interface:\nclass Chocolate implements Bar\n\n{\npublic void foo() { /* do something */ }\n}",
    },
  },
  {
    title: "Memory management",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    notes:
      "Roughly the same--new allocates, but no delete in Java since it has garbage collection.",
    code: {
      cpp: "",
      java: "",
    },
  },
  {
    title: "NULL vs. null",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "// initialize pointer to NULL\nint *x = NULL;",
      java: "// the compiler will catch the use of uninitialized references, but if you\n// need to initialize a reference so it's known to be invalid, assign null\nmyClass x = null;",
    },
  },
  {
    title: "Booleans",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    notes:
      "Java is a bit more verbose: you must write boolean instead of merely bool.",
    code: {
      cpp: "bool foo;",
      java: "boolean foo;",
    },
  },
  {
    title: "Const-ness",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "const int x = 7;",
      java: "final int x = 7;",
    },
  },
  {
    title: "Throw Spec",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    notes:
      "First, Java enforce throw specs at compile time--you must document if your method can throw an exception",
    code: {
      cpp: "int foo() throw (IOException)",
      java: "int foo() throws IOException",
    },
  },
  {
    title: "Arrays",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    code: {
      cpp: "int x[10];\n// or\nint *x = new x[10];\n// use x, then reclaim memory\ndelete[] x;",
      java: "int[] x = new int[10];\n// use x, memory reclaimed by the garbage collector or returned to the\n// system at the end of the program's lifetime",
    },
  },
  {
    title: "Collections and Iteration",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    cnotes:
      "Iterators are members of classes. The start of a range is <container>.begin(), and the end is <container>.end(). Advance using ++ operator, and access using *.",
    jnotes:
      "Iterator is just an interface. The start of the range is <collection>.iterator, and you check to see if you're at the end with itr.hasNext(). You get the next element using itr.next() (a combination of using ++ and * in C++).",
    code: {
      cpp: "vector myVec;\nfor ( vector<int>::iterator itr = myVec.begin();\nitr != myVec.end();\n++itr )\n{\ncout << *itr;\n}",
      java: "ArrayList myArrayList = new ArrayList();\nIterator itr = myArrayList.iterator();\nwhile ( itr.hasNext() )\n{\nSystem.out.println( itr.next() );\n}\n\n// or, in Java 5\nArrayList myArrayList = new ArrayList();\nfor( Object o : myArrayList ) {\nSystem.out.println( o );\n}",
    },
  },
];
