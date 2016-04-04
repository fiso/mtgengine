"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelicVoicesBase = require("../setCHR/AngelicVoices.js");

class AngelicVoices extends AngelicVoicesBase {
  constructor(game) {
    super(game, "Angelic Voices", "Legends", "LEG");
  }
}

module.exports = AngelicVoices;
