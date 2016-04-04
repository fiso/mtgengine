"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheTabernacleatPendrellValeBase = require("../setLEG/TheTabernacleatPendrellVale.js");

class TheTabernacleatPendrellVale extends TheTabernacleatPendrellValeBase {
  constructor(game) {
    super(game, "The Tabernacle at Pendrell Vale", "Masters Edition III", "ME3");
  }
}

module.exports = TheTabernacleatPendrellVale;
