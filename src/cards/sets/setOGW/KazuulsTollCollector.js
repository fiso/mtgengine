"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KazuulsTollCollector extends UnimplementedCard {
  constructor (game) {
    super(game, "Kazuul's Toll Collector", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KazuulsTollCollector;
