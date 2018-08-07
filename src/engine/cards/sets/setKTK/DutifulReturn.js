"use strict";
const Constants = require ("../../../Constants");
const DutifulReturnBase = require("../setBFZ/DutifulReturn");

class DutifulReturn extends DutifulReturnBase {
  constructor (game) {
    super(game, "Dutiful Return", "Khans of Tarkir", "KTK");
  }
}

module.exports = DutifulReturn;
