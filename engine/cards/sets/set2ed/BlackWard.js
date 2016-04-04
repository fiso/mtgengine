"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackWardBase = require("../setCED/BlackWard.js");

class BlackWard extends BlackWardBase {
  constructor(game) {
    super(game, "Black Ward", "Unlimited Edition", "2ED");
  }
}

module.exports = BlackWard;
