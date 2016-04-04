"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JerrardoftheClosedFistBase = require("../setLEG/JerrardoftheClosedFist.js");

class JerrardoftheClosedFist extends JerrardoftheClosedFistBase {
  constructor(game) {
    super(game, "Jerrard of the Closed Fist", "Masters Edition III", "ME3");
  }
}

module.exports = JerrardoftheClosedFist;
