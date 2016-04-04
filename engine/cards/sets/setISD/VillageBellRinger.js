"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VillageBellRingerBase = require("../setDDQ/VillageBellRinger.js");

class VillageBellRinger extends VillageBellRingerBase {
  constructor(game) {
    super(game, "Village Bell-Ringer", "Innistrad", "ISD");
  }
}

module.exports = VillageBellRinger;
