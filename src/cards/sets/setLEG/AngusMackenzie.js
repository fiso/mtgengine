"use strict";
const Constants = require ("../../../Constants");
const AngusMackenzieBase = require("../setME3/AngusMackenzie");

class AngusMackenzie extends AngusMackenzieBase {
  constructor (game) {
    super(game, "Angus Mackenzie", "Legends", "LEG");
  }
}

module.exports = AngusMackenzie;
