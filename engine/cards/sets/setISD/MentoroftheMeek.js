"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MentoroftheMeekBase = require("../setC14/MentoroftheMeek.js");

class MentoroftheMeek extends MentoroftheMeekBase {
  constructor(game) {
    super(game, "Mentor of the Meek", "Innistrad", "ISD");
  }
}

module.exports = MentoroftheMeek;
