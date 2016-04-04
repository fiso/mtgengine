"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicVoicesBase = require("../setCHR/AngelicVoices.js");

class AngelicVoices extends AngelicVoicesBase {
  constructor(game) {
    super(game, "Angelic Voices", "Masters Edition IV", "ME4");
  }
}

module.exports = AngelicVoices;
