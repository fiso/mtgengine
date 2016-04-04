"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AliBabaBase = require("../setARN/AliBaba.js");

class AliBaba extends AliBabaBase {
  constructor(game) {
    super(game, "Ali Baba", "Fourth Edition", "4ED");
  }
}

module.exports = AliBaba;
