"use strict";
const Constants = require ("../../../Constants");
const TheTabernacleatPendrellValeBase = require("../setME3/TheTabernacleatPendrellVale");

class TheTabernacleatPendrellVale extends TheTabernacleatPendrellValeBase {
  constructor (game) {
    super(game, "The Tabernacle at Pendrell Vale", "Magic Online Promos", "PRM");
  }
}

module.exports = TheTabernacleatPendrellVale;
