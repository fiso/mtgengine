"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AxelrodGunnarsonBase = require("../setCHR/AxelrodGunnarson.js");

class AxelrodGunnarson extends AxelrodGunnarsonBase {
  constructor(game) {
    super(game, "Axelrod Gunnarson", "Masters Edition III", "ME3");
  }
}

module.exports = AxelrodGunnarson;
