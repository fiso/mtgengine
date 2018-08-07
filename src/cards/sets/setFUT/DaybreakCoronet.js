"use strict";
const Constants = require ("../../../Constants");
const DaybreakCoronetBase = require("../setMM2/DaybreakCoronet");

class DaybreakCoronet extends DaybreakCoronetBase {
  constructor (game) {
    super(game, "Daybreak Coronet", "Future Sight", "FUT");
  }
}

module.exports = DaybreakCoronet;
