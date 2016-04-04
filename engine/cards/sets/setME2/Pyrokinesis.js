"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyrokinesisBase = require("../setALL/Pyrokinesis.js");

class Pyrokinesis extends PyrokinesisBase {
  constructor(game) {
    super(game, "Pyrokinesis", "Masters Edition II", "ME2");
  }
}

module.exports = Pyrokinesis;
