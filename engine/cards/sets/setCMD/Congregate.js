"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CongregateBase = require("../setM14/Congregate.js");

class Congregate extends CongregateBase {
  constructor(game) {
    super(game, "Congregate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Congregate;
