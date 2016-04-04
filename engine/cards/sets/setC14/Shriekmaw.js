"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShriekmawBase = require("../setARC/Shriekmaw.js");

class Shriekmaw extends ShriekmawBase {
  constructor(game) {
    super(game, "Shriekmaw", "Commander 2014", "C14");
  }
}

module.exports = Shriekmaw;
