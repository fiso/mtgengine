"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KaysaBase = require("../setALL/Kaysa.js");

class Kaysa extends KaysaBase {
  constructor(game) {
    super(game, "Kaysa", "Masters Edition II", "ME2");
  }
}

module.exports = Kaysa;
