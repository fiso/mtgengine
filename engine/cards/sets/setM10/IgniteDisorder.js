"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IgniteDisorderBase = require("../setCON/IgniteDisorder.js");

class IgniteDisorder extends IgniteDisorderBase {
  constructor(game) {
    super(game, "Ignite Disorder", "Magic 2010", "M10");
  }
}

module.exports = IgniteDisorder;
