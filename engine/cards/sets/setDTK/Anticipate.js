"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnticipateBase = require("../setBFZ/Anticipate.js");

class Anticipate extends AnticipateBase {
  constructor(game) {
    super(game, "Anticipate", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Anticipate;
