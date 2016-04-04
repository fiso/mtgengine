"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmisticeBase = require("../setC14/Armistice.js");

class Armistice extends ArmisticeBase {
  constructor(game) {
    super(game, "Armistice", "Mercadian Masques", "MMQ");
  }
}

module.exports = Armistice;
