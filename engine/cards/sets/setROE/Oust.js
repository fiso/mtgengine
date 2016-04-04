"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OustBase = require("../setDDP/Oust.js");

class Oust extends OustBase {
  constructor(game) {
    super(game, "Oust", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Oust;
