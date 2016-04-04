"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PariahBase = require("../set7ED/Pariah.js");

class Pariah extends PariahBase {
  constructor(game) {
    super(game, "Pariah", "Tenth Edition", "10E");
  }
}

module.exports = Pariah;
