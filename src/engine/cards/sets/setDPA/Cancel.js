"use strict";
const Constants = require ("../../../Constants");
const CancelBase = require("../setM19/Cancel");

class Cancel extends CancelBase {
  constructor (game) {
    super(game, "Cancel", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Cancel;
