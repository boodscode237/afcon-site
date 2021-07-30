import React from 'react'
import './FixturesAndResult.Styles.css'
import FixturesAndResultMatches from "../FixturesAndResultsMatches/FixturesAndResultMatches.Component";

function FixturesAndResult(){
    return(
        <div className="fixturesAndResult">
            <h2 className="fixturesAndResult__header">Fixtures & Results</h2>
            <div className="fixturesAndResult__fixRes">
                <div className="fixturesAndResult__fixRes__fixtures">
                    <h3 className="fixturesAndResult__fixRes__fixtures__title">Fixtures</h3>
                    <div className="fixturesAndResult__fixRes__fixtures__title__match">
                        <FixturesAndResultMatches />
                        <FixturesAndResultMatches />
                        <FixturesAndResultMatches />
                        <FixturesAndResultMatches />

                    </div>
                </div>
                <div className="fixturesAndResult__fixRes__results">
                    <h3 className="fixturesAndResult__fixRes__results__title">Result</h3>
                    <div className="fixturesAndResult__fixRes__fixtures__title__match">
                        <FixturesAndResultMatches />
                        <FixturesAndResultMatches />
                        <FixturesAndResultMatches />
                        <FixturesAndResultMatches />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixturesAndResult