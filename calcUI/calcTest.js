QUnit.test("It should handle key press", function( assert ) {
	$('#5').click();
	$('#6').click();
	$('#8').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 568 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should handle key press", function( assert ) {
	$('#5').click();
	$('#9').click();
	$('#8').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 598 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#3').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 9 , "Passed!" );
    $('#AC').click();
});

QUnit.test("It should plus two numbers", function( assert ) {
	$('#5').click();
	$('#plus').click();
	$('#6').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 11 , "Passed!" );
     $('#AC').click();
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#4').click();
	$('#dot').click();
	$('#5').click();
	$('#minus').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 1.5 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should minus two numbers", function( assert ) {
	$('#5').click();
	$('#minus').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 3 , "Passed!" );
    $('#AC').click();
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#dot').click();
	$('#5').click();
	$('#multiply').click();
	$('#2').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 5, "Passed!" );
    $('#AC').click();
});
QUnit.test("It should divide two numbers", function( assert ) {
	$('#3').click();
	$('#dot').click();
	$('#6').click();
	$('#9').click();
	$('#divide').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num == 1.23, "Passed!" );
});