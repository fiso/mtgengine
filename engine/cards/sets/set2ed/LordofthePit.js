"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LordofthePitBase = require("../setCED/LordofthePit.js");

class LordofthePit extends LordofthePitBase {
  constructor(game) {
    super(game, "Lord of the Pit", "Unlimited Edition", "2ED");
  }
}

module.exports = LordofthePit;
