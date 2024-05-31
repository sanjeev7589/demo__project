sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'demoproject/Login/test/integration/FirstJourney',
		'demoproject/Login/test/integration/pages/CustomersMain'
    ],
    function(JourneyRunner, opaJourney, CustomersMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('demoproject/Login') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersMain: CustomersMain
                }
            },
            opaJourney.run
        );
    }
);