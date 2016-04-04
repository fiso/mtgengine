"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KazuulsTollCollector extends Card {
  constructor(game) {
    super(game, "Kazuul's Toll Collector", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KazuulsTollCollector;
