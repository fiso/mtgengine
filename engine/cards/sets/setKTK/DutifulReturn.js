"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DutifulReturnBase = require("../setBFZ/DutifulReturn.js");

class DutifulReturn extends DutifulReturnBase {
  constructor(game) {
    super(game, "Dutiful Return", "Khans of Tarkir", "KTK");
  }
}

module.exports = DutifulReturn;
