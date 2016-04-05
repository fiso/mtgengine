"use strict";
const Constants = require ("../../../Constants");
const DearlyDepartedBase = require("../setDDQ/DearlyDeparted");

class DearlyDeparted extends DearlyDepartedBase {
  constructor(game) {
    super(game, "Dearly Departed", "Innistrad", "ISD");
  }
}

module.exports = DearlyDeparted;
