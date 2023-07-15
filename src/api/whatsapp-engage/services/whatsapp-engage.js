'use strict';

/**
 * whatsapp-engage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatsapp-engage.whatsapp-engage');
