"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TwincastBase = require("../setM10/Twincast.js");

class Twincast extends TwincastBase {
  constructor(game) {
    super(game, "Twincast", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Twincast;
