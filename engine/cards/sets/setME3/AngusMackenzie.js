"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngusMackenzieBase = require("../setLEG/AngusMackenzie.js");

class AngusMackenzie extends AngusMackenzieBase {
  constructor(game) {
    super(game, "Angus Mackenzie", "Masters Edition III", "ME3");
  }
}

module.exports = AngusMackenzie;
