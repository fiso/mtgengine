"use strict";
const Constants = require ("../../../Constants");
const AngusMackenzieBase = require("../setLEG/AngusMackenzie");

class AngusMackenzie extends AngusMackenzieBase {
  constructor (game) {
    super(game, "Angus Mackenzie", "Masters Edition III", "ME3");
  }
}

module.exports = AngusMackenzie;
