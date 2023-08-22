class Login {
    aceptAllCache(userinfo) {
        cy.get('[class="button right"]')
            .should('be.visible')
            .click();
    }
    clickThetrainsButton(userinfo) {
        cy.get('[class="sc-12k9xk2-9 dpRIZW"]')
            .should('have.text', userinfo.trainsDetails);

    }
    clickTheReturncheckBox(userinfo) {
        cy.get(':nth-child(1) > .sc-1ivxz71-1')
            //.first()
            .should('have.text', userinfo.returnCheckBox)
            .dblclick();
    }
    enterTheFromDetails(userinfo) {
        cy.get('[type="text"]')
            .first()
            .type(userinfo.enterThefromDetails, { force: true });
        cy.contains("London St Pancras Int'l")
            .should('be.visible')
            .click();
    }
    enterTheToDetails(userinfo) {
        cy.get('[placeholder="City or station"]').eq(1)
            .type(userinfo.enterTheToDetails, { force: true });
        cy.contains("Paris Gare du Nord")
            .should('be.visible')
            .click();

    }
    clickTheDateText(userinfo) {
        cy.get('[name="calendar"]')
            .first()
            .click(); ``
    }
    clickTheDateTimeText(userinfo) {
        // const calender = cy.get('[class="sc-158hvzt-1 fghddN"]')

        // calender.each(($dateElement, index) => {
        //     if (index < 2) {
        //       cy.wrap($dateElement).should('be.visible').click();
        //     } else {

        //     }
        //   });
        //---------------------------------------------------------------------------------------
        let clickedDates = [];
        cy.get('[class="sc-158hvzt-1 fghddN"]').each(($dateElement) => {
            if (clickedDates.length < 2) {
                const dateText = $dateElement.text().trim();
                if (!clickedDates.includes(dateText)) {
                    cy.wrap($dateElement).click();
                    clickedDates.push(dateText);
                }
            }
            else {
                return false;
            }
        });
        //-----------------------------------------------------------------------------------------
        // Random dates click
        // cy.get('[class="sc-158hvzt-1 fghddN"]').then(($dates) => {
        //     const randomIndices = Cypress..sampleSize(Cypress..range($dates.length), 2);

        //     // Click on the randomly selected date elements
        //     cy.wrap(randomIndices).each((index) => {
        //       cy.wrap($dates.eq(index)).click();
        //     });
        // });

    }
    clickTheDateButton(userinfo) {
        cy.get('[class="sc-7w9xhz-0 elMkGB"]')
            .should('have.text', 'OK')
            .click({ force: true });
    }
    thePassengerDetails(userinfo) {
        cy.get('[name="passenger-type"]').click({ force: true });


    }
    theAdultsPassengerDetails(userinfo) {
        cy.get('[class="nlcp7r-0 deDXRl addAdult"]').click();
        cy.get('[class="sc-16wkrq3-6 cmhjRy"]')
            .should('have.text', '2');
    }
    adultsDetailsOkButton(userinfo) {
        cy.get('[class="sc-7w9xhz-0 elMkGB"]').last()
            .should('be.visible')
            .click({ multiple: true });
        cy.wait(5000);
    }

    clickTheSearchButton(userinfo) {
        cy.get('[class="sc-7w9xhz-0 fpliFR SearchButton"]')
            .click();
    }
    selectOutBoundDetails(userinfo) {
        cy.get('[data-testid="outbound-journey-anchor-time-slot-afternoon-label"]')
            .click();
        cy.get('[class="sc-q9wa3z-1 diuBOc sc-7m1l97-2 NKSdo"]').eq(13)
            .should('be.visible')
            .click();
    }

    clickTheReturnSubmited(userinfo) {
        cy.get('[class="sc-axlilu-4 gVVuIz"]').eq(5)
            .should('have.text', 'Select')
            .and('be.visible')
            .click();
    }
    // clickContinueButton(userinfo) {
    //     cy.contains('Continue')
    //         .click({ force: true });
    // }
   
    checkOutAsScreanText2(userinfo) {

        cy.get('[data-testid="outbound-DateOption-2"]').then(($dateElement, index) => {
            cy.wait(5000)
            if ($dateElement) {
                cy.wrap($dateElement).should('be.visible');
                cy.wait(4059);
                cy.get('[data-testid="outbound-journey-anchor-time-slot-afternoon-label"]').then(($button) => {
                    const buttonText = $button.text();
                    if (buttonText === 'Afternoon') {
                        cy.contains('Afternoon').should('be.visible').and('contain', 'Afternoon').click();
                        const calender = cy.get('[data-testid="departure-time"]')
                        calender.each(($dateTime, index) => {
                            const priceAmount = parseInt($dateTime.text().replace('$', '')); // Get the price amount as a number
                            const spot = 2 * priceAmount;
                            if (index == 8) {
                                cy.wrap($dateTime).should('be.visible').click();
                                const timeSiftSlot = cy.get('[data-testid="journey-price-amount"]')
                                timeSiftSlot.each(($timesift, index) => {
                                    const priceAmount1 = parseInt($timesift.text().replace('$', ''))

                                    if (index == 19) {
                                        cy.wrap($timesift).should('be.visible').click();
                                    }
                                    else if (index == 19) {
                                        cy.get('[data-testid="fare-item-not-available-label"]').then(($notAvailble) => {
                                            const notAvailble = $notAvailble.text();
                                            if (notAvailble === 'Not available') {
                                                cy.contains('Not available').should('be.visible').and('contain', 'Not available');

                                            }
                                        });
                                    }
                                    else {

                                    }
                                });
                            }
                        });

                    }
                    else {
                        cy.log('this is not afternoon data')
                    }
                })
            } else {
                cy.log('date its will be not visible')

            }
        });


    }

    clickOutboundSelect(userinfo) {
        //cy.contains('Select').click()
        cy.get('[class="sc-axlilu-4 gVVuIz"]').eq(6).click({ force: true })
        cy.wait(5000)
    }
    clickTheSelectReturn(userinfo) {
        cy.get('[data-testid="inbound-journey-direction-header-journey-heading"]').then(($returnDate, index) => {
            if ($returnDate) {
                cy.wrap($returnDate).should('be.visible').and('have.text', 'Select return');
                const dateOfSecquance = cy.get('[data-testid="inbound-DateOption-2"]')
                dateOfSecquance.then(($dateOfSecquan, index) => {
                    if ($dateOfSecquan) {
                        cy.wrap($dateOfSecquan).should('be.visible');
                        const AfternoonDetails = cy.get('[class="sc-oh483x-4 dTXocg"]').eq(1)
                        AfternoonDetails.then(($AfternoonDetail) => {
                            const buttonTextroled = $AfternoonDetail.text();
                            if (buttonTextroled === 'Afternoon') {
                                cy.contains('Afternoon').should('be.visible').and('contain', 'Afternoon').click();
                                const calenderDtails = cy.get('[data-testid="departure-time"]')
                                calenderDtails.each(($dateTimeDetails, index) => {
                                    if (index == 8) {
                                        cy.wrap($dateTimeDetails).should('be.visible').click();
                                        const timeSiftSlotDetails = cy.get('[data-testid="journey-price-amount"]')
                                        const timeSiftSlot = timeSiftSlotDetails;
                                        const timePolt = (2 * timeSiftSlot)

                                        timeSiftSlotDetails.each(($timesiftdetails, index) => {
                                            if (index == 25) {
                                                cy.wrap($timesiftdetails).should('be.visible').click();

                                            }
                                            else if (index == 25) {
                                                cy.get('[data-testid="fare-item-not-available-label"]').then(($notAvailble) => {
                                                    const notAvailble = $notAvailble.text();
                                                    if (notAvailble === 'Not available') {
                                                        cy.contains('Not available').should('be.visible').and('contain', 'Not available');

                                                    }
                                                });
                                            }
                                        })
                                    }
                                })

                            } else {
                                cy.log('afternoon details not availble ')
                            }
                        })
                    } else {
                        cy.log('the return date not availble here ')
                    }
                })

            } else {
                cy.log('the return selet data not availble')
            }
        })
    }

    clickreturnSelect() {
        cy.get('[class="sc-axlilu-0 feNgHl"]').eq(8).click({ force: true })
        cy.wait(5000)

    }
    clickContinueButton(userinfo) {
        cy.contains('Continue')
            .click({ force: true });
    }
    continueWithOutExtra(userinfo) {
        cy.get('[class="sc-iBkjds kEHJDf"]')
            //  .scrollIntoView()
            // .and('have.text', 'Continue without extras')
            .click()
    }
    checkOutAsGueast(userinfo) {
        cy.get('[class="sc-axlilu-4 egvkga"]').last()
            // .should('have.text', 'Check out as a guest,')
            .scrollIntoView()
            .click();
    }
    checkOutGivenAssertion() {
        cy.get('[data-testid="h1-heading"]').last().should('be.visible')
    }
    firstAdultDetails() {
        cy.get('[id="customers[0].firstName"]').should('be.visible').type("modapuru");
        cy.get('[id="customers[0].lastName"]').should('be.visible').type("subbarayudu");
        cy.get('[id="customers[0].email"]').should('be.visible').type("subbarayudu@gmail.com");
        cy.get('[autocomplete="passenger1 tel-country-code"]').then(($ele) => {
            cy.wrap($ele).select('India (+91)');
            cy.get('[id="customers[0].phoneNumber"]').should('be.visible').type('7893346104');
        })
    }
    secondAdultDetails() {
        cy.get('[id="customers[1].firstName"]').should('be.visible').type("modapuru");
        cy.get('[id="customers[1].lastName"]').should('be.visible').type("subbu");
        cy.get('[id="customers[1].email"]').should('be.visible').type("mssubbarayudu@gmail.com");
        cy.get('[autocomplete="passenger2 tel-country-code"]').then(($ele) => {
            cy.wrap($ele).select('India (+91)');
            cy.get('[id="customers[1].phoneNumber"]').should('be.visible').type('6304475586');
        })

    }
    contactDetails() {
        cy.get('[id="contactDetails.email"]').should('be.visible').type("subbarayuduModapuru@gmail.com");
        cy.get('[autocomplete="tel-country-code"]').then(($ele1) => {
            cy.wrap($ele1).select('India (+91)');
            cy.get('[id="contactDetails.mobileNumber"]').should('be.visible').type('6304475587');
        })
        cy.get('[class="rs__control css-1g7ofha-control"]').first().then(($blb) => {
            cy.log($blb)
            cy.wrap($blb).click()
            function perfomanceValue(option, result) {
                option.contains(result).click()
            }
            const option1 = cy.get('[tabindex="-1"]');
            const result1 = "Business"

            perfomanceValue(option1, result1)
        })

    }
    billingAdress() {
        cy.get('[id="billingAddress.line1"]').should('be.visible').type('konarajupalli');
        cy.get('[id="billingAddress.line2"]').should('be.visible').type('madapuru');
        cy.get('[id="billingAddress.city"]').should('be.visible').type('kadapa');
        cy.get('[id="billingAddress.state"]').should('be.visible').type('Andrapradesh');
        cy.get('[id="billingAddress.postcode"]').should('be.visible').type('516501');
        cy.get('[class="rs__indicators css-1wy0on6"]').last().then(($blb1) => {
            cy.log($blb1)
            cy.wrap($blb1).click()
            function perfomanceValue(option, result) {
                option.contains(result).click()
            }
            const option2 = cy.get('[tabindex="-1"]');
            const result2 = "India"

            perfomanceValue(option2, result2)
        })
    }
    cardDetails() {
        cy.get('[id="vouchers.code"]').type('1324');
        cy.get('[class="sc-axlilu-4 ictsBs"]').eq(0).click();

        cy.get('[id="adyen-checkout-encryptedCardNumber-1692717092803"]').click()
        cy.get('[id="adyen-checkout-encryptedCardNumber-1692717092803"]').type('4057-4786-4235-5830');
        cy.wait(5000)
        cy.get('[data-fieldtype="encryptedExpiryDate"]')
            .type('10/2029');
        cy.get('[data-fieldtype="encryptedSecurityCode"]')
            .type('567');
        cy.get('[name="holderName"]')
            .type('Roberta Aufderhar');
        cy.get('[data-testid="submit-card"]')
            .click();

        cy.get('[data-testid="otp-input"]')
            .should('be.visible').then(otpInput => {
                // Simulate receiving OTP (you might need to fetch this OTP from a real source in your tests)
                const otp = '123456'; // Replace with the actual OTP
                // Enter the OTP
                cy.wrap(otpInput).type(otp);
                // Submit OTP
                cy.get('[data-testid="submit-otp"]')
                    .click();
            });

        // Verify the payment result
        cy.get('[data-testid="payment-result"]').should('contain', 'Payment Successful'); // Update with your expected message

    }
    checkBoxesInfinalSubmit() {
        const checkbox = cy.get('input[type="checkbox"]')
        checkbox.each(($allCheckBoxs, index) => {
            cy.wrap($allCheckBoxs).click();
        })
    }
    clickBuyNowButton() {
        //cy.get('[class="sc-axlilu-4 ictsBs"]').eq(1)
        cy.window().scrollTo('bottom', { duration: 1000 })
        cy.contains('Buy Now')
            .should('be.visible').and('have.text', 'Buy Now')
            //.scrollIntoView()
            .dblclick()
    }
    checkOutAsGueast(userinfo) {
        cy.contains('Check out as a guest')
            .should('have.text', 'Check out as a guest')
            .click();
    }
    checkOutAsScreanText(userinfo) {
        cy.get('[data-testid="h1-heading"]')
            .last()
            .should('have.text', userinfo.checkOutDetails);
    }

}
export const loginpage = new Login();
