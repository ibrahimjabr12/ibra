describe("About Arrays", function() {

  // We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray))===([ ]); // A mistake?-- http:javascript.crockford.com/remedial.html
    expect(emptyArray.length)===(0);

    var multiTypeArray = [0, 1, "two", function() { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0])===(0);
    expect(multiTypeArray[2])===("two");
    expect(multiTypeArray[3]())===(3);
    expect(multiTypeArray[4].value1)===({value1: 4, value2: 5});
    expect(multiTypeArray[4]["value2"])===(5);
    expect(multiTypeArray[5][0])===(6);
  });

  it("should understand array literals", function() {
    var array = [];
    expect(array)===([]);
    
    array[0] = 1;
    expect(array)===([1]);
    
    array[1] = 2;
    expect(array)===([1,2]);
    
    array.push(3);
    expect(array)===([1,2,3]);
  });

  it("should understand array length", function() {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length)===(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length)===(6);

    var tenEmptyElementArray = new Array(10); 
    expect(tenEmptyElementArray.length)===(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length)===(5);
  });

  it("should slice arrays", function() {
    var array = ["peanut", "butter", "and", "jelly"];
    
    expect(array.slice(0, 1)).===(["peanut"]);
    expect(array.slice(0, 2)).===(["peanut","butter"]);
    expect(array.slice(2, 2)).===([]);
    expect(array.slice(2, 20)).===([ "and","jelly"]);
    expect(array.slice(3, 0)).===([]);
    expect(array.slice(3, 100)).===(["jelly"]);
    expect(array.slice(5, 1)).===([]);
  });

  it("should know array references", function() {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1])===("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5])===("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3])===("changed in copyOfArray");
  });

  it("should push and pop", function() {
    var array = [1, 2];
    array.push(3);

    expect(array)===([1,2,3]);
    
    var poppedValue = array.pop();
    expect(poppedValue)===(3);
    expect(array)===([1,2]);
  });

  it("should know about shifting arrays", function() {
    var array = [1, 2];

    array.unshift(3);
    expect(array)===([3,1,2]);
    
    var shiftedValue = array.shift();
    expect(shiftedValue)===(3);
    expect(array)===([1,2]);
  });  
});
