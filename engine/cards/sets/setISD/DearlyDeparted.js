"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DearlyDepartedBase = require("../setDDQ/DearlyDeparted.js");

class DearlyDeparted extends DearlyDepartedBase {
  constructor(game) {
    super(game, "Dearly Departed", "Innistrad", "ISD");
  }
}

module.exports = DearlyDeparted;
