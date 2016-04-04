"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverwhelmingIntellectBase = require("../setDDJ/OverwhelmingIntellect.js");

class OverwhelmingIntellect extends OverwhelmingIntellectBase {
  constructor(game) {
    super(game, "Overwhelming Intellect", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OverwhelmingIntellect;
