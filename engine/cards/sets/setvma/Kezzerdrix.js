"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KezzerdrixBase = require("../setTMP/Kezzerdrix.js");

class Kezzerdrix extends KezzerdrixBase {
  constructor(game) {
    super(game, "Kezzerdrix", "Vintage Masters", "VMA");
  }
}

module.exports = Kezzerdrix;
