# Kadapa Farming Supplies — Firebase-connected app starter

## Current status
- Responsive farmer booking interface
- Instant booking confirmation
- Firebase Firestore integration scaffold (`app.js`)
- Admin booking listing/status update scaffold
- Local demo fallback
- Android-ready PWA structure

## Connect live backend
1. Create a Firebase project at https://console.firebase.google.com/
2. Add a Web app and copy its config into `app.js`.
3. Enable Firestore Database.
4. Enable Authentication > Anonymous (prototype only; production should use phone OTP).
5. Deploy `firestore.rules` (review and tighten before public launch).
6. Host on HTTPS (Firebase Hosting is convenient).
7. Test farmer bookings on two phones and admin view.

## Critical security note
The included rules are development-only and allow signed-in users to read/update bookings. Do NOT launch publicly with these rules. Production needs role-based admin/operator access, private farmer records, phone verification, server-side booking availability/locking, rate limiting, and protected status changes.

## Android install
Once hosted over HTTPS, open the URL in Android Chrome > menu > Install app / Add to Home screen. This gives an installable PWA. A native APK wrapper (Capacitor/Android Studio) and Play Store signing are separate build/release steps.

## Still needed for a true live production system
- Your Firebase project config and admin account
- Final service catalog and real prices
- Fleet availability / machine scheduling rules
- Farmer OTP login
- Operator assignment and dispatch
- SMS/WhatsApp notifications
- Payment integration (optional)
- Production Firestore rules and server-side controls
