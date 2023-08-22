import { loginpage } from "../pages/eurostar";


describe("Testing the railway ticket booking system", () => {
    let userinfo;
    beforeEach(() => {
        cy.fixture('eurostar.json').then((data) => ((userinfo) = (data)))
    })
    it("Built the project for railway ticket booking", () => {
        cy.visit("https://www.eurostar.com/rw-en")
        loginpage.aceptAllCache(userinfo.validationdetails);
        loginpage.clickThetrainsButton(userinfo.validationdetails)
        loginpage.clickTheReturncheckBox(userinfo.validationdetails)
        loginpage.enterTheFromDetails(userinfo.tiketDetails);
        loginpage.enterTheToDetails(userinfo.tiketDetails)
        loginpage.clickTheDateText(userinfo.tiketDetails)
        loginpage.clickTheDateTimeText()
        loginpage.clickTheDateButton()
        loginpage.thePassengerDetails()
        loginpage.theAdultsPassengerDetails()
        loginpage.adultsDetailsOkButton()
        loginpage.clickTheSearchButton()
        loginpage.checkOutAsScreanText2()


        // loginpage.clickContinueButton()
       
        loginpage.clickOutboundSelect()
        loginpage.clickTheSelectReturn()
        loginpage.clickreturnSelect()
        loginpage.checkOutAsGueast(userinfo.validationdetails);
        loginpage.checkOutGivenAssertion();
        loginpage.firstAdultDetails(userinfo.tiketDetails);
        loginpage.secondAdultDetails()
        loginpage.contactDetails()
        loginpage.billingAdress()
        loginpage.checkBoxesInfinalSubmit()
        loginpage.cardDetails()
        loginpage.clickBuyNowButton()
        //loginpage.checkOutAsGueast(loginuserdata.tiketDetails)
      //  loginpage.checkOutAsScreanText(loginuserdata.validationdetails)

    });

});