"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UncontrollableAngerBase = require("../setCHK/UncontrollableAnger.js");

class UncontrollableAnger extends UncontrollableAngerBase {
  constructor(game) {
    super(game, "Uncontrollable Anger", "Tenth Edition", "10E");
  }
}

module.exports = UncontrollableAnger;
