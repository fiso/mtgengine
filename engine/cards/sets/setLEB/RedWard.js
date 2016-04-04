"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedWardBase = require("../setCED/RedWard.js");

class RedWard extends RedWardBase {
  constructor(game) {
    super(game, "Red Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = RedWard;
